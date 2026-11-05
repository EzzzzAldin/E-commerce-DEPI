import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const e = React.createElement;
const render = (element) => renderToStaticMarkup(element);
const count = (text, needle) => text.split(needle).length - 1;

let server;
let ActualProductCard;
let ActualFlashSales;

before(async () => {
  server = await createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  ActualProductCard = (
    await server.ssrLoadModule('/src/components/product/ProductCard.jsx')
  ).default;
  ActualFlashSales = (
    await server.ssrLoadModule('/src/components/home/FlashSales.jsx')
  ).default;
});

after(async () => {
  if (server) {
    await server.close();
  }
});

const actualProductHtml = () => render(e(ActualProductCard));

function getSpans(html) {
  return [...html.matchAll(/<span(?: class="([^"]*)")?>([^<]*)<\/span>/g)].map(
    (match) => ({
      className: match[1] || '',
      text: match[2],
    })
  );
}

const saleClasses =
  'sale py-0.75 px-1.5 rounded-xs bg-red-off text-[8px] font-semibold text-white';
const titleClass = 'text-base font-bold text-gray-800';
const priceClass = 'text-sm font-bold text-red-off';

// ---------------------------------------------------------------------------
// Real project components
// ---------------------------------------------------------------------------

test('real ProductCard: renders the real .card structure', () => {
  const html = actualProductHtml();
  assert.ok(
    html.includes(
      '<div class="card flex flex-col w-75 bg-white shadow-2xl rounded-lg">'
    )
  );
  assert.ok(
    html.includes(
      '<div class="card-down flex flex-col gap-1.5 py-4 px-18.5">'
    )
  );
});

test('real ProductCard: title is the h3 with the real class and text', () => {
  const html = actualProductHtml();
  const title = /<h3 class="text-base font-bold text-gray-800">([^<]+)<\/h3>/.exec(
    html
  );
  assert.equal(title?.[1], 'Tonny Black');
  assert.ok(
    html.includes(
      '<p class="text-xs text-gray-600">Shoulder bag-White-Plain</p>'
    )
  );
});

test('real ProductCard: current price and old price use the real elements', () => {
  const html = actualProductHtml();
  const priceBlock =
    /<div class="price flex items-center justify-between">([\s\S]*?)<\/div>/.exec(
      html
    );
  assert.ok(priceBlock, 'the .price block should exist');
  assert.ok(
    priceBlock[1].includes(
      '<span class="text-sm font-bold text-red-off">50$</span>'
    )
  );
  assert.ok(
    priceBlock[1].includes('<del class="text-xs text-gray-600">100$</del>')
  );
});

test('real ProductCard: .sale is the only discount element', () => {
  const html = actualProductHtml();
  const spans = getSpans(html);
  const saleSpans = spans.filter((span) =>
    span.className.split(/\s+/).includes('sale')
  );

  assert.equal(saleSpans.length, 1);
  assert.equal(saleSpans[0].text.trim(), '-40%');
  assert.match(saleSpans[0].className, /bg-red-off/);
  assert.match(saleSpans[0].className, /text-white/);
  assert.deepEqual(
    spans.filter((span) => span.text.includes('%')).map((span) => span.text),
    ['-40%']
  );
});

test('real ProductCard: countdown, rating, and price spans are not .sale', () => {
  const html = actualProductHtml();
  const spans = getSpans(html);

  for (const span of spans) {
    if (!span.className.split(/\s+/).includes('sale')) {
      assert.ok(
        !span.text.includes('-40%'),
        `unexpected discount text in span: ${span.text}`
      );
    }
  }

  assert.equal(spans.filter((span) => span.text === '(54)').length, 1);
  assert.equal(spans.filter((span) => span.text === 'hour').length, 1);
  assert.equal(spans.filter((span) => span.text === '50$').length, 1);
});

test('real FlashSales: renders four ProductCards in the real container', () => {
  const html = render(e(ActualFlashSales));
  assert.ok(
    html.includes(
      '<section class="flash-sales flex flex-col gap-12 max-w-page mx-auto">'
    )
  );
  assert.ok(html.includes('<div class="flex gap-5">'));
  assert.equal(count(html, '<div class="card '), 4);
  assert.equal(count(html, '<span class="sale '), 4);
});

test('real FlashSales source: four literal calls and no map or data array', () => {
  const source = readFileSync(
    new URL('../src/components/home/FlashSales.jsx', import.meta.url),
    'utf8'
  );
  assert.equal((source.match(/<ProductCard \/>/g) || []).length, 4);
  assert.doesNotMatch(source, /\.map\(/);
  assert.doesNotMatch(source, /products/);
});

test('real ProductCard source: no props, no destructuring, no default props', () => {
  const source = readFileSync(
    new URL('../src/components/product/ProductCard.jsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /function ProductCard\(\) \{/);
  assert.doesNotMatch(source, /function ProductCard\(\{/);
  assert.doesNotMatch(source, /function ProductCard\(props\)/);
});

// ---------------------------------------------------------------------------
// Lecture behavior, using the real class names and structure
// ---------------------------------------------------------------------------

function LectureCard({ title = 'Untitled Product', price = 0, discount = 0 }) {
  return e(
    'div',
    { className: 'card flex flex-col w-75 bg-white shadow-2xl rounded-lg' },
    e(
      'div',
      { className: 'card-down flex flex-col gap-1.5 py-4 px-18.5' },
      e('h3', { className: titleClass }, title),
      e(
        'div',
        { className: 'price flex items-center justify-between' },
        e('span', { className: priceClass }, `${price}$`),
        discount > 0
          ? e('span', { className: saleClasses }, `-${discount}%`)
          : null
      )
    )
  );
}

const products = [
  { id: 1, title: 'Shoulder Bag', price: 79.99 },
  { id: 2, title: 'Running Shoes', price: 120 },
  { id: 3, title: 'Classic Watch', price: 95 },
  { id: 4, title: 'Casual T-Shirt', price: 35 },
];

test('lecture Props: title and price reach the real title/price elements', () => {
  const html = render(
    e(LectureCard, { title: 'Shoulder Bag', price: 79.99 })
  );
  assert.ok(html.includes(`<h3 class="${titleClass}">Shoulder Bag</h3>`));
  assert.ok(html.includes(`<span class="${priceClass}">79.99$</span>`));
});

test('lecture Props: multiple cards keep their own titles', () => {
  const html = render(
    e(
      'div',
      { className: 'flex gap-5' },
      e(LectureCard, { title: 'Shoulder Bag', price: 79.99 }),
      e(LectureCard, { title: 'Running Shoes', price: 120 })
    )
  );
  assert.equal(count(html, '<div class="card '), 2);
  assert.match(html, />Shoulder Bag<\/h3>/);
  assert.match(html, />Running Shoes<\/h3>/);
});

test('lecture Destructuring: missing optional props use defaults', () => {
  const html = render(e(LectureCard, {}));
  assert.ok(html.includes(`<h3 class="${titleClass}">Untitled Product</h3>`));
  assert.ok(html.includes(`<span class="${priceClass}">0$</span>`));
});

test('lecture map(): four products render with four unique keys', () => {
  const cards = products.map((product) =>
    e(LectureCard, {
      key: product.id,
      title: product.title,
      price: product.price,
    })
  );
  assert.deepEqual(
    cards.map((card) => card.key),
    ['1', '2', '3', '4']
  );

  const html = render(e('div', { className: 'flex gap-5' }, cards));
  assert.equal(count(html, '<div class="card '), 4);
  for (const product of products) {
    assert.match(html, new RegExp(`>${product.title}</h3>`));
    assert.match(html, new RegExp(`>${product.price}\\$</span>`));
  }
});

test('lecture map(): keys are unique across the four products', () => {
  const keys = products.map((product) => product.id);
  assert.equal(new Set(keys).size, 4);
});

test('lecture Ternary: .sale appears only with a discount', () => {
  const withDiscount = render(e(LectureCard, { discount: 40 }));
  const withoutDiscount = render(e(LectureCard, { discount: 0 }));

  assert.equal(count(withDiscount, 'class="sale '), 1);
  assert.equal(count(withoutDiscount, 'class="sale '), 0);
});

test('lecture Logical AND: .sale is gated by discount > 0', () => {
  const withDiscount = render(e(LectureCard, { discount: 40 }));
  const withoutDiscount = render(e(LectureCard, { discount: 0 }));
  const negativeDiscount = render(e(LectureCard, { discount: -5 }));

  assert.match(withDiscount, /<span class="sale [^"]*">-40%<\/span>/);
  assert.equal(count(withoutDiscount, 'class="sale '), 0);
  assert.equal(count(negativeDiscount, 'class="sale '), 0);
});

function DiscountBadge({ discount }) {
  if (discount <= 0) {
    return null;
  }
  return e('span', { className: saleClasses }, '-40%');
}

test('lecture DiscountBadge: renders the real .sale element when discount > 0', () => {
  assert.equal(
    render(e(DiscountBadge, { discount: 40 })),
    `<span class="${saleClasses}">-40%</span>`
  );
});

test('lecture DiscountBadge: returns null at zero or below', () => {
  assert.equal(render(e(DiscountBadge, { discount: 0 })), '');
  assert.equal(render(e(DiscountBadge, { discount: -5 })), '');
});

test('lecture DiscountBadge: zero discount leaves no .sale in the price block', () => {
  const html = render(
    e(
      'div',
      { className: 'price flex items-center justify-between' },
      e('span', { className: priceClass }, '50$'),
      e(DiscountBadge, { discount: 0 }),
      e(DiscountBadge, { discount: 40 })
    )
  );
  assert.equal(count(html, 'class="sale '), 1);
  assert.equal(count(html, '>-40%</span>'), 1);
});
