
import React from "react";
import image from "../images/award-image.jpg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "STEM,CODING and ROBOTICS",
    description:
      "",
    image_url: "https://lh3.googleusercontent.com/pw/ADCreHfqGFdr12Z4YU4jXVM2LDAEhS6xDKsiFi5BLw0fqqdEFOKTwVV9-YgDcLsCCOvlGxtFgjWDxF6PqubY6_dTSaT8ajeZnrzYtqy7nJ1o1aqGxzPko3wgQgovdFktbWCU7_IiGyCpQO02_dlrJOfYc0ntgwaJXsHvGPBN53PRbJTyt8PgWlHZVgOka_mPGqTDFsfp3pKHc4byj5TKU7geTPcsSN-pTGa8xiHvLPfliKVBKMh0AfhPHfi62glZkV2-OByJJI2eZHndEC59W1sjGf0Fr9ou59Xfpv9EITEoHEu34wDc50VzF1b071Y-Gp4KVzk1hkpSOU4T4ZpyrdknS0lsNUq6aBElbRK5lJlInVD5-8xD98WBYHWPMeN2LVaVhON79qHbtw5W0lMjxzMoJB4yTcsoVtiqwU01bObSaqIIbMB_NoedIbI3qScmq1zhCnKmy7kho-4RbNZi9FtfML7CmaMxARJTceGHP_FsTecZ0xZ_Zhi-9O-ed2d_99-L6JvDPXXrKoZ_X2RndFAtta66aLqTrRYGgApXVCE1NV1_mFc7ClvV8-d8i5WhDD40_2BAzrnYJg8l-bv8mxMUk96HYDBBenRaBYeDigwtlvjRPuUrSQ0i3W89jJp-vLJC07RzUwDr-AcluUOIu5WTBfcObSbZhbSD8mp3OaJDuE9HjkLoRVu41kG8DxIBedNAPM5DYziIxSjfqDlpWkgXuzdIBRY7syI1ulFSsDHstiR3Ss1-Z1BOaxTtrNKXjjCIyCWK-2Bpy2AiTjVf3CcnHCxV_BJmbRp9xKbnaSXgjBGCMdmtVFVX2L59m0bCcMyKBW1msAsdXFQ8GPxezT9-2GtuR52rFiPvIC76GuZQZ8G_YuzYvf8bIalW0DYo4AQuZQ=w1063-h752-s-no?authuser=0",
  },
  {
    title: "Google serverless web development",
    description:"",
    image_url: "https://developers.google.com/static/profile/badges/playlists/solutions/ecommerce-serverless-django/badge.svg",
  },
  {

    title: "Hacktoberfest completion awards 2023.",
    description:
      "",
    image_url: "https://holopin.me/comon"
  },
  {
    title: "Code week Kenya 2023",
    description:
      "",
    image_url: "https://lh3.googleusercontent.com/pw/ADCreHdJLuU4n4eZrEw-75m5a6Z4kgl1faVwvN4dzLFYqcpvzWAzTVnGHizXern9HM-ZbUOtlwLb4XOh2SP1H78GccKXroJzyvreNQUzAgPyncjMOA_s39G0qAu-7ThmcAH97Y3JR6d5l_kl_y6xHC3Y0pYMsN96HjbfzjMYBc-fJagkiXtQsaknp18i9V8g3HXTb_1rqdD1DfyDM4aljW4scdcTOzSTizFsT6JghEPE_eXUQGvD6dHzcKsjR8oY9YBOiiygRmGSQcQL1TfsjndlW6_XDpFWv55DivUBChg680UWDG1XqVcGop0zxxz65In9L7_W3N_xggNCDl45HYM1OkpPWx35q5s5IhkB8G_nZxIVtJHUnMJ_o6ca6RnBJYm1ZuTaVC3Li-HRpE8ITNfRLrIQ_K0MoOAkhb0HsulpKJYjtIz1nWYtE6gzBzqwU4hrCzP8Z_TL1DAUr5xhLf-ZVGW6XX7bp2gAGbwvVrAGkJWPFBpFlNJERxUx1k1RC6srUW4ieBFhKON8OuAXYzTJU51XMDfclcvQs2CHn0a418hqw6p6pft6ib9QCaAaC-hI2aoDApiZeETLRth85SSUwtpyblrMUrJjUguhFMjnCcWQhLEhLT48YqJFNO_sA_lNKRjiGObYJj2n-Rn3dlppEiczfSIvYFvPfL7OIwCwsd-wX8pvBe4jcHj3hetYFiORNsuGauOtPBTYLaEAW6iNyG9X3ibQW-xwTBKA39NLf-VjqWTvmLTPexlSOnaChfaFEZF83BPu6RXjly2qz6iCtQ4JXe5qw2OM7lS5-4j0FtFW50Hbw22OF6wRZqe_u3pQeKEFtYNSBW5iRIXYFSF9ZK7fPwrGDr-oO8TFSz3BhLlzZowx84zigzxT5RRjN-EtUA=w788-h687-s-no?authuser=0"
  },
  {
    title: "GDSC core team member",
    description:
      "",

    image_url: "https://developers.google.com/static/profile/badges/community/gdsc/2023/core-member/badge.svg"
  },
  {
    title: "Google Cloud Innovator",
    description: "",
    image_url: "https://developers.google.com/static/profile/badges/community/innovators/cloud/2021_member/badge.svg",
  },
];

const Awards = () => {
  return (
    <section className="padding" id="awards">
      <h2 style={{ textAlign: "center" }}>Awards</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img src={project.image_url} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}} >
              </img>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
