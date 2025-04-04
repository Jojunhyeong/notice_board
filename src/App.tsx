import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopNav } from "./components/common/TopNav";
import { Home } from "./components/main/Home";
import { NoticeBoard } from "./components/main/NoticeBoard";
import { Post } from "./components/post/Post";
import { Write } from "./components/write/Write";

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<NoticeBoard />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
