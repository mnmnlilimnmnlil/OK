import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './Chat.module.scss';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 서버 연결 상태 확인
  useEffect(() => {
    const checkServer = async () => {
      try {
        // 실제 API 호출로 서버와 API 키 모두 확인
        const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:8787'}/api/ok-e`, {
          messages: [{ role: 'user', content: 'test' }],
          model: 'gpt-4o-mini',
          temperature: 0.7
        });
        setIsConnected(true);
      } catch (error) {
        console.error('Server connection error:', error);
        setIsConnected(false);
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 10000); // 10초마다 확인 (API 호출이므로 간격 늘림)
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputMessage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:8787'}/api/ok-e`, {
        messages: newMessages,
        model: 'gpt-4o-mini',
        temperature: 0.7
      });

      const assistantMessage = { role: 'assistant', content: response.data.message.content };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { role: 'assistant', content: '죄송합니다. 서버에 연결할 수 없습니다.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles['chat__container']}>
      <div className={styles['chat__header']}>
        <h3>OK-E Chat</h3>
        <div className={styles['chat__status-indicator']}>
          <div className={`${styles['chat__status-dot']} ${isConnected ? styles['chat__status-dot--connected'] : styles['chat__status-dot--disconnected']}`}></div>
          <span>{isConnected ? '서버 연결됨' : '서버 연결 끊김'}</span>
        </div>
      </div>
      
      <div className={styles['chat__messages']}>
        {messages.length === 0 && (
          <div className={styles['chat__welcome-message']}>
            <p>안녕하세요! OK-E와 대화해보세요.</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={index} className={`${styles['chat__message']} ${styles[`chat__message--${message.role}`]}`}>
            <div className={styles['chat__message-content']}>
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className={`${styles['chat__message']} ${styles['chat__message--assistant']}`}>
            <div className={styles['chat__message-content']}>
              <div className={styles['chat__typing-indicator']}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className={styles['chat__input']}>
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          disabled={isLoading}
          rows={1}
        />
        <button 
          onClick={sendMessage} 
          disabled={!inputMessage.trim() || isLoading}
          className={styles['chat__send-button']}
        >
          전송
        </button>
      </div>
    </div>
  );
}
