function CustomerInfoForm() {
  // L4 => View
  return (
    <section className="customer-info-form flex-1">
      <fieldset className="border-0">
        <legend className="text-2xl font-bold text-gray-800">
          Customer Information
        </legend>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="customer-email" className="text-sm text-gray-600">
              E-mail
            </label>
            <input
              id="customer-email"
              type="email"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="customer-first-name" className="text-sm text-gray-600">
              First Name
            </label>
            <input
              id="customer-first-name"
              type="text"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="customer-last-name" className="text-sm text-gray-600">
              Last Name
            </label>
            <input
              id="customer-last-name"
              type="text"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0">
        <legend className="text-2xl font-bold text-gray-800">
          Shipping Address
        </legend>
        <div className="mt-6 flex flex-col gap-5">
          <div>
            <label htmlFor="customer-country" className="text-sm text-gray-600">
              Country
            </label>
            <select
              id="customer-country"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            >
              <option>Australia</option>
            </select>
          </div>
          <div>
            <label htmlFor="customer-state" className="text-sm text-gray-600">
              State/Region
            </label>
            <select
              id="customer-state"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            >
              <option>Melbourne</option>
            </select>
          </div>
          <div>
            <label htmlFor="customer-address" className="text-sm text-gray-600">
              Address
            </label>
            <input
              id="customer-address"
              type="text"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="customer-phone" className="text-sm text-gray-600">
              Phone Number
            </label>
            <input
              id="customer-phone"
              type="tel"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800"
            />
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default CustomerInfoForm;
