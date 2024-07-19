import React, { useState } from "react";

export default function PhoneInputForm() {
	const [tel, setTel] = useState("");

	const handleTelChange = (value) => {
		const formatedPhoneValue = phoneFormater(value);
		setTel(formatedPhoneValue);
	};

	return <input onChange={(val) => handleTelChange(val)} value={tel} />
}

function phoneFormater(num) {
	if (!num) return num;
	const phoneNumber = num.replace(/\D/g, "");
	const phoneNumberLength = phoneNumber.length;
	if (phoneNumberLength < 4) return phoneNumber;
	if (phoneNumber < 7 || num.length <= 9) {
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
	}
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}