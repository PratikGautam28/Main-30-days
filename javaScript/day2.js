const response = {
  status: 200,
  data: {
    user: {
      id: 101,
      name: "Anu",
      address: { city: "Pokhara", country: "Nepal" },
      skills: ["HTML", "CSS", "JS"]
    },
    token: "abc123"
  }
};

const{status,data:{token,user:{name,address:{city},skills:[mainSkill]}}}=response;
console.log(status,token,name,city,mainSkill);


const { id, ...userDetails } = response.data.user;
console.log(id, userDetails);
// 101 { name: "Anu", address: { city: "Pokhara", country: "Nepal" }, skills: ["HTML", "CSS", "JS"] }