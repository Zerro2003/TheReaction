import React from "react";

type SubscribeButtonProps = {
  subscribed: boolean;
};

export default function SubscribeButton({ subscribed }: SubscribeButtonProps) {
  return (
    <button
      className={`px-6 py-2 rounded-md text-white font-semibold transition
        ${subscribed 
          ? "bg-green-500 animate-pop" 
          : "bg-blue-600 hover:bg-blue-700"
        }`}
    >
      {subscribed ? "Subscribed!" : "Subscribe"}
    </button>
  );
}
