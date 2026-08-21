/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CopyButton({ ButtonText = "Copy", CopyText = "Hello" }) {
    const [copied, setCopied] = useState(false);

    const textToCopy = CopyText;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <button onClick={handleCopy}>
            {copied ? "Copied!" : ButtonText}
        </button>
    );
}