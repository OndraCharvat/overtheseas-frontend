
import Link from "next/link";

export default function Profile() {
    return (
      <div>            
        <Link href="/login"> 
        <button className="bg-secondary text-white text-sm px-6 py-3 tracking-[-0.05em] font-extrabold rounded-full hover:bg-purpleots transition">
           Odhlásit se
        </button>
        </Link>
      </div>
    );
  }
  