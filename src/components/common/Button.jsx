import { Link } from "react-router-dom";


function Button({ 
  text, 
  to,
  variant = "primary"
}) {


  const styles = {

    primary: `
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      hover:from-blue-700
      hover:to-indigo-700
      text-white
      shadow-lg
      shadow-blue-500/30
    `,


    secondary: `
      bg-white
      border
      border-gray-300
      text-gray-800
      hover:bg-gray-100
    `

  };



  return (


    <Link

      to={to}

      className={`
        inline-flex
        items-center
        justify-center
        px-7
        py-3.5
        rounded-xl
        font-semibold
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        focus:outline-none
        ${styles[variant]}
      `}

    >

      {text}


    </Link>


  );

}


export default Button;