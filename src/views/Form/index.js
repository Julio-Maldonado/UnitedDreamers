import React from 'react';

import FormBody from './FormBody';

const Form = (props) => {
  return <FormBody {...props} />;
}

export default Form;

// const Form = (props) => {
//   const { handleSubmit, register, errors } = useForm();
//   const formProps = {
//     handleSubmit,
//     register,
//     errors
//   };

//   return (
//     <FormBody
//       {...{...props, ...formProps}}
//     />
//   );
// }
