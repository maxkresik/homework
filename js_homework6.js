//--------------------------------------------------//

const company = {
    name: 'Шкарпеткова Імперія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу шкарпеток',
    sellsSolution: 'Рішення для продажу шкарпеток',
    clients: [
      {
        name: 'Шкарпетка Плюс',
        type: 'subCompany',
        uses: 'ПО для продажу шкарпеток',
        sells: 'Рішення для продажу шкарпеток',
        partners: [
          {
            name: 'Шкарпетка Плюс 1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу шкарпеток',
            sells: 'Рішення для продажу шкарпеток',
          },
          {
            name: 'Шкарпетка Плюс 2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу шкарпеток',
            sells: 'Рішення для продажу шкарпеток',
            partners: [
              {
                name: 'Шкарпетка Плюс 2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу шкарпеток',
                sells: 'Рішення для продажу шкарпеток',
              }
            ]
          }
        ]
      },
      {
        name: 'Шкарпеткова Лавка',
        type: 'subCompany',
        uses: 'ПО для продажу шкарпеток',
        sells: 'Рішення для продажу шкарпеток'
      }
    ]
  };

  //--------------------------------------------------//
  
  //функція, пошук компанії за назвою
  function findValueByKey(companyName, obj = company) {
      if (obj.name === companyName) {
          return obj;
      }
      
      //перевірка на наявність клієнтів
      if (obj.clients) {
          for (let i = 0; i < obj.clients.length; i++) {
              let result = findValueByKey(companyName, obj.clients[i]);
              if (result) return result;
          }
      }
      
      //перевірка на наявність партнерів
      if (obj.partners) {
          for (let i = 0; i < obj.partners.length; i++) {
              let result = findValueByKey(companyName, obj.partners[i]);
              if (result) return result;
          }
      }
      
      //нічого не знайдено
      return null;
  }
  
  //пошук компаній
  console.log(findValueByKey('Шкарпетка Плюс 2')); 
  console.log(findValueByKey('Шкарпетка Плюс 2.3')); 
  console.log(findValueByKey('Шкарпеткова Лавка'));

  
  