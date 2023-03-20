export default function validateRole(role, roles) {
   const findIndex = roles.findIndex((item) => item === role);

   return findIndex === -1 ? false : true;
}
