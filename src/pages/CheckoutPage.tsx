
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        companyName: "",
        streetAddress: "",
        apartment: "",
        city: "",
        phoneNumber: "",
        email: "",
        saveInfo: false,
        paymentMethod: "cash",
    });

    
    // Handle input change for form fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        // Update formData; use "checked" for checkboxes, otherwise "value"
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In case if there is a real api so i can handle form submission logic
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center text-sm mt-14 font-normal text-gray-400">
                <span>Account</span>
                <span className="mx-2">/</span>
                <span>My Account</span>
                <span className="mx-2">/</span>
                <span>Product</span>
                <span className="mx-2">/</span>
                <span>View Cart</span>
                <span className="mx-2">/</span>
                <span className="font-semibold text-black">CheckOut</span>
            </div>

            <h2 className="text-4xl font-medium mt-14">Billing Details</h2>

            <section className="my-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Billing Details */}
                <div className="max-w-[470px] font-normal text-base">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">First Name<span className="text-[#DB4444]">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">Street Address<span className="text-[#DB4444]">*</span></label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">
                                Apartment, floor, etc. (optional)
                            </label>
                            <input
                                type="text"
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">Town/City<span className="text-[#DB4444]">*</span></label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">Phone Number<span className="text-[#DB4444]">*</span></label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 font-normal mb-2">Email Address<span className="text-[#DB4444]">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-[#F5F5F5] rounded"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="saveInfo"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleInputChange}
                                className="mr-3 accent-[#DB4444] h-[18px] w-[18px] cursor-pointer"
                            />
                            <label htmlFor="saveInfo" className="text-gray-400 font-normal cursor-pointer">
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="p-4 rounded font-normal text-base">
                    <div className="mb-4 space-y-5 max-w-[600px]">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-5">
                                <img src="/images/product-1.png" className="w-[54px] h-[54px]" alt="LCD Monitor" />
                                <span>LCD Monitor</span>
                            </div>
                            <span>$650</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-5">
                                <img src="/images/checkout2.png" className="w-[54px] h-[54px]" alt="H1 Gamepad" />
                                <span>H1 Gamepad</span>
                            </div>
                            <span>$1100</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-2 mt-7 border-b border-gray-400 pb-5 max-w-[600px]">
                        <span>Subtotal:</span>
                        <span>$1750</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 border-b border-gray-400 pb-5 pt-3 max-w-[600px]">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between items-center  pt-2 max-w-[600px]">
                        <span>Total:</span>
                        <span>$1750</span>
                    </div>

                    {/* Payment Options */}
                    <div className="my-4">
                        <div className="space-y-6">
                            <div className="flex justify-between max-w-[600px]">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        id="paymentMethodBank"
                                        value="bank"
                                        checked={formData.paymentMethod === "bank"}
                                        onChange={handleInputChange}
                                        className="mr-2 accent-black h-6 w-6"
                                    />
                                    <label htmlFor="paymentMethodBank">Bank</label>
                                </div>
                                <div className="flex gap-2">
                                    <img className="w-[42px] h-4" src="/images/checkout-kash.png" alt="Kash" />
                                    <img className="w-[42px] h-4" src="/images/checkout-visa.png" alt="Visa" />
                                    <img className="w-[42px] h-4" src="/images/checkout-masterCard.png" alt="Master card" />
                                    <img className="w-[42px] h-4" src="/images/checkout-india.png" alt="India" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paymentMethodCash"
                                    value="cash"
                                    checked={formData.paymentMethod === "cash"}
                                    onChange={handleInputChange}
                                    className="mr-2 accent-black h-6 w-6"
                                />
                                <label htmlFor="paymentMethodCash">Cash on delivery</label>
                            </div>
                        </div>
                    </div>

                    {/* Coupon Code */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="p-4 w-full lg:w-[300px] h-14 rounded-r border border-gray-400 rounded-l mb-4 lg:mb-0"
                        />
                        <button className="bg-[#DB4444] w-full lg:w-[211px] h-14 text-white px-4 py-2 rounded">
                            Apply Coupon
                        </button>
                    </div>

                    {/* Place Order Button */}
                    <button
                        type="submit"
                        className="bg-[#DB4444] w-full lg:w-48 h-14 text-white py-2 rounded mt-4"
                    >
                        Place Order
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CheckoutPage;
