// import React, { useState } from 'react';

// function Form() {
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     // Действия по отправке формы на сервер
//     // ...
//   };

  

//   return (
//     <form className="column tile" onSubmit={handleSubmit}>
//       <label>
//         Заголовок новости:
//         <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Основная часть:
//         <textarea value={content} onChange={event => setContent(event.target.value)} />
//       </label>
//       <br />
      
//       <br />
//       <label>
//         <input type="checkbox" checked={isGlobal} onChange={event => setIsGlobal(event.target.checked)} />
//         Глобальная новость
//       </label>
//       <br />
//       <button type="submit">Создать новость</button>
//     </form>
//   );
// }

// export default Form;