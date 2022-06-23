import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjNkMmY2MGYyM2IxMjExNjkwMTBhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk1MjY2NywiZXhwIjoxNjU2MjExODY3fQ.S5Hioly1bP73i5vteOD9qXoOwW5SB70u8k7kpev4oDI';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
