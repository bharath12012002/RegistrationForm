let s3_url_temp = "";

// if (window.location.hostname === "pentagonhrm.techgenzi.com") {
//     return s3_url_temp = "https://freshvoice.sgp1.digitaloceanspaces.com/";;
//   } else {
//     return s3_url_temp = "https://freshvoice.sgp1.digitaloceanspaces.com/";
//   }
if (window.location.hostname === "pentagonhrm.techgenzi.com") {
    s3_url_temp ="https://pghrmapi.techgenzi.com:9002/pg-cdn/"

}else{
    s3_url_temp = "https://freshvoice.sgp1.digitaloceanspaces.com/";
}



 export const S3_URL =s3_url_temp;
