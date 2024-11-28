import { motion } from "framer-motion";
import { useState } from "react";
import './Waitlist.scss';

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(""); // State for feedback message
  
  const handleClick = async () => {
    if (!email) return;
    setIsLoading(true);
    setMessage(""); // Reset any previous messages
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        setMessage("Successfully joined the waitlist!"); // Success message
      } else if (response.status === 400) {
        setMessage("Invalid email address! Please try again."); // Invalid email message
      } else if (response.status === 409) {
        setMessage("Email already on the waitlist!"); // Already on the waitlist
      } else {
        setMessage("An unexpected error occurred. Please try again later."); // General error
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("Failed to connect. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (<>
    <div className="wishlist-wrapper">
      <motion.input
        required
        type="email"
        className="email"
        placeholder="Enter your email...."
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <motion.button
        className="button-join"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={handleClick}
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </motion.button>
    </div>
      {message && (
        <div className="message">
          {message}
        </div>
      )}
    </>
  );
};

export default Waitlist;
