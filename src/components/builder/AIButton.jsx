import { useState } from "react";


function AIButton({ resume, setResume }) {


  const [loading, setLoading] = useState(false);



  async function improve() {


    try {

      setLoading(true);


      const response = await fetch(
        "http://127.0.0.1:8000/improve-summary",
        {

          method: "POST",

          headers:{
            "Content-Type":"application/json",
          },


          body: JSON.stringify({

            name: resume.name || "",

            title: resume.title || "",

            summary: resume.summary || "",

            skills: resume.skills || [],

            experience: resume.experience || [],

            projects: resume.projects || []

          })

        }
      );



      const data = await response.json();



      if(!response.ok){

        throw new Error(
          data.detail || "AI failed"
        );

      }



      setResume({

        ...resume,

        summary:data.summary

      });



    }

    catch(error){

      console.log(error);

      alert(
        "AI failed. Check backend."
      );

    }


    finally{

      setLoading(false);

    }

  }




  return (

    <button

      onClick={improve}

      disabled={loading}

      className="
      bg-purple-600
      hover:bg-purple-700
      text-white
      px-5
      py-3
      rounded-xl
      transition-all
      duration-200
      "

    >

      {
        loading
        ?
        "✨ Improving..."
        :
        "✨ Improve With AI"
      }


    </button>

  );

}


export default AIButton;