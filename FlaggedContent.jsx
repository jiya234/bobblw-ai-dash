import React, { useEffect, useState } from "react";
import "./FlaggedContent.css";

const FlaggedContent = () => {
  const [flaggedPosts, setFlaggedPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlaggedContent = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/flagged-content`);

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setFlaggedPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFlaggedContent();
  }, []);

  return (
    <div className="flagged-container">
      <h1 className="flagged-title">🚩 Flagged Content</h1>

      {error && <p className="error-message">❌ {error}</p>}

      <div className="flagged-table-container">
        <table className="flagged-table">
          <thead>
            <tr>
              <th>👤 User</th>
              <th>⚠️ Reason</th>
              <th>📝 Content</th>
            </tr>
          </thead>
          <tbody>
            {flaggedPosts.length > 0 ? (
              flaggedPosts.map((post, index) => (
                <tr key={post.id || index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                  <td>{post.user || "Unknown User"}</td>
                  <td className="red-text">{post.reason || "No reason provided"}</td>
                  <td>{post.content || "No content available"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">⏳ {error ? "Error fetching data" : "Loading flagged content..."}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlaggedContent;



// import React, { useState } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://192.168.70.227:8000";  // Backend ka sahi IP daal

// const ImageAnalyzer = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedFile) {
//       alert("Please select an image first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post(`${API_BASE_URL}/analyze`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setResult(response.data);  // Backend ka response state me save karo
//     } catch (error) {
//       console.error("API Error:", error);
//       setResult({ error: "API request failed" });
//     }
//   };

//   return (
//     <div>
//       <h2>Analyze Image</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Analyze</button>
//       </form>

//       {result && (
//         <div>
//           <h3>Analysis Result:</h3>
//           {result.response ? (
//             <ul>
//               {result.response.map((item, index) => (
//                 <li key={index}>
//                   <strong>{item.label}</strong>: {item.score.toFixed(2)}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>{result.error || "No result found"}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageAnalyzer;