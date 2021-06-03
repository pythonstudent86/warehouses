import axios from 'axios';

const API_TOKEN = '1203324790:AAGFRM465eS2sODQ_LMkzWw0mmIiDGh3wUA';
const CHAT_ID = '391676';
// let messageText = 'привет мир';

async function requestTelegram(messageText) {
  const respData = await axios(
    `https://api.telegram.org/bot${API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${messageText}&parse_mode=HTML`,
  );
  console.log(respData);
  return respData;
}

export default requestTelegram;
