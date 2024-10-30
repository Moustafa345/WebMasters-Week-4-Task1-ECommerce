const AccountPage: React.FC = () => {

  const userInfo = JSON.parse(localStorage.getItem("currentUser") || '{}');

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 sm:text-sm md:text-base">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 mt-4 sm:mt-10">
        <div className="flex items-center mb-2 sm:mb-0">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="font-medium">My Account</span>
        </div>
        <div>Welcome! <span className="text-[#DB4444]">{userInfo.name}</span></div>
      </div>

      <div className="flex flex-col lg:flex-row my-8 lg:my-16">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 px-2 sm:px-4 mb-6 lg:mb-0">
          <h2 className="font-semibold mb-4">Manage My Account</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#DB4444] font-medium ml-4 sm:ml-9">My Profile</a></li>
            <li><a href="#" className="text-[#808080] ml-4 sm:ml-9">Address Book</a></li>
            <li><a href="#" className="text-[#808080] ml-4 sm:ml-9">My Payment Options</a></li>
          </ul>
          <h2 className="font-semibold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#808080] ml-4 sm:ml-9">My Returns</a></li>
            <li><a href="#" className="text-[#808080] ml-4 sm:ml-9">My Cancellations</a></li>
          </ul>
          <h2 className="font-semibold mt-6 mb-4">My Wishlist</h2>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 sm:p-8 lg:p-16 shadow-[0px_1px_13px_rgba(0,0,0,0.05)] border rounded">
          <h2 className="text-base md:text-lg font-semibold text-[#DB4444] mb-6">Edit Your Profile</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Md"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Rimel"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="rimel1111@gmail.com"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Kingston, 5236, United State"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
            </div>
            <h3 className="text-sm md:text-lg font-semibold mt-8 mb-4">Password Changes</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="password"
                  id="currentPassword"
                  name="current"
                  placeholder="Current Password"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="newPassword"
                  name="new"
                  placeholder="New Password"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirm"
                  placeholder="Confirm New Password"
                  className="w-full p-2 border bg-[#f5f5f5] text-[#7a7a7a] rounded"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-10 mt-8">
              <button type="button" className="font-medium order-2 sm:order-1 mt-4 md:mt-0">Cancel</button>
              <button type="button" className="px-6 py-2 w-full sm:w-[214px] h-12 sm:h-14 bg-[#DB4444] text-white rounded order-1 sm:order-2">
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
