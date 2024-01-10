import React from "react";
import FAQComponent from "./FAQComponent";

const FAQs = [
    {
        question: "What is KimiPay?",
        answer: "KimiPay is a secure and convenient platform for international remittances. It allows users to send and receive money across borders with ease. With KimiPay, you can enjoy fast, reliable, and low-cost money transfers, making it an ideal solution for individuals and businesses engaged in global transactions. Our platform prioritizes security, ensuring that your financial information and transactions are protected. Explore the world of hassle-free remittances with KimiPay today!",
    },
    {
        question: "How do I send money using KimiPay?",
        answer: "Sending money using KimiPay is a straightforward process. Follow these simple steps:\n\n1. Log in to your KimiPay account or sign up if you're a new user.\n2. Navigate to the 'Send Money' section on the dashboard.\n3. Choose the recipient's country and enter the amount you want to send.\n4. Select the preferred payment method.\n5. Review your transaction details and confirm the transfer.\n6. Once confirmed, KimiPay will securely process your transaction and notify you upon completion.\n\nThat's it! Your money will be on its way to the recipient, providing a convenient and efficient remittance experience.",
    },
    {
        question: "Is there a maximum limit on the amount I can send or receive?",
        answer: "Yes, there are maximum limits imposed on transactions to comply with regulatory standards. These limits vary depending on the destination and the type of transaction."
    }
  ];

const FAQsSection = () => {
    return ( 
        <div className="page-section">
            <h2 className="heading">FAQs</h2>
            <div className="FAQs">
                {FAQs.map((faq, index) => (
                    <FAQComponent key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}

export default FAQsSection;