import Chat from '../../components/Chat';
import './style.scss';

export default function OKe() {
  return (
    <div className='ok-e-container'>
      <div className='ok-e-header'>
        <h1>OK-E</h1>
        <p>AI와 대화하며 새로운 아이디어를 탐색해보세요</p>
      </div>
      <Chat />
    </div>
  );
}
