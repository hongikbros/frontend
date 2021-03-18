import axios from 'axios';

class GetBoardInfo {
  constructor() {
    this.board = axios.create({
      baseURL: `./mock/board.json`,
    });
  }

  async getInfo() {
    const response = await this.board.get(``).then((data) => data.data.items);

    return response;
  }
}

export default GetBoardInfo;
