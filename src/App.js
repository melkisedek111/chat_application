import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('myChatAppUsername')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="079194f7-7a38-4ef1-9341-c02552525f44"
            userName={localStorage.getItem('myChatAppUsername')}
            userSecret={localStorage.getItem('myChatAppPassword')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;