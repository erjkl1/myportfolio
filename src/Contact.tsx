import { init, send } from 'emailjs-com';
import {useState} from 'react';
import TemporaryDrawer from './TemporaryDrawer';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';


export default function Contact () {
  const drawerButtonStyle = {
    position:'absolute',
    right: '20px',
    bottom: '20px',
    width:'50px',
    height:'50px',
    display:'flex',
    justifyContent: 'center',
    backgroundColor:'blue',
    color:'#ffffff',
    "&:hover": {
      backgroundColor:'red',
      cursor: 'default',
    }
  };

    const [name, setName] = useState(''); // 「ご氏名」の部分
    const [company, setCompany] = useState(''); // 「会社名」の部分
    const [mail, setMail] = useState(''); // 「メールアドレス」の部分
    const [title, setTitle] = useState(''); // 「件名」の部分
    const [message, setMessage] = useState(''); // 「お問い合わせ内容」の部分
    
    const sendMail = () => {
    
        const userID = process.env.REACT_APP_USER_ID;
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;

        if (
            userID !== undefined &&
            serviceID !== undefined &&
            templateID !== undefined
        ) { init(userID); }
        
        const template_param = {
            to_name: name,
            company: company,
            from_email: mail,
            title: title,
            message: message,
        };

        send(serviceID , templateID, template_param).then(() => {
            window.alert('お問い合わせを送信致しました。');
            setName('');
            setCompany('');
            setMail('');
            setMessage('');
            setTitle('');
        });
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        sendMail();
    };
    
    const handleCanceled = () => {
        setName('');
        setCompany('');
        setMail('');
        setMessage('');
        setTitle('');
    };

    const disableSend = 
    name === '' || mail === '' || title === '' || message === '';
    
  
  return (
    <div>
        <h1 className="pageTitle text-center">お問い合わせ</h1>
        <div className="mainContent flex justify-center">
            <div className="contentsBox">
            <p>
                お問い合わせは、以下のフォームから受け付けております。
                <br />
                SNSからのご連絡でも大丈夫です！
            </p>
            <form>
                <div>
                <label htmlFor="nameForm" >ご氏名：</label>
                </div>
                <input 
                    type="text" 
                    id="nameForm" 
                    className="formInput w-full text-black" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}    
                />
                <div>
                <label htmlFor="companyNameForm">会社名：</label>
                </div>
                <input 
                    type="text" 
                    id="companyNameForm" 
                    className="formInput w-full text-black"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}  
                    required 
                />
                <div>
                <label htmlFor="mailForm">メールアドレス：</label>
                </div>
                <input 
                    type="email" 
                    id="mailForm" 
                    className="formInput w-full text-black" 
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}      
                />
                <div>
                <label htmlFor="mailTitleForm">件名：</label>
                </div>
                <input 
                    type="text" 
                    id="mailTitleForm" 
                    className="formInput w-full text-black" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}  
                />
                <div>
                <label htmlFor="mailContentForm">お問い合わせ内容：</label>
                </div>
                <textarea  
                    id="mailContentForm" 
                    className="formInput w-full text-black"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}      
                />
                <div className="btns">
                    <div>
                        <Button 
                            variant="contained"
                            endIcon={<SendIcon />} 
                            onClick={handleClick}
                            disabled={disableSend}    
                        >
                        <strong>お問い合わせを送信する</strong>
                        </Button>
                    </div>
                    <div>
                        <Button 
                            variant="contained"
                            endIcon={<ClearIcon />} 
                            onClick={handleCanceled}
                            disabled={disableSend}
                        >
                        <strong>キャンセル</strong>
                        </Button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
}