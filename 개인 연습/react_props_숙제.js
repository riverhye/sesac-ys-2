function App (){
    let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    return (
      <div>
        <Modal title={title}></Modal>
      </div>
    )
  }
  
  function Modal(props){
    return (
      <div className="modal">
        <h4>{ props.title[0] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
            const copyTitle = props.[...title]
            copyTitle[0] = '여자코트 추천'
            setTitle(copyTitle[0])
        }}></button>
      </div>
    )
  }