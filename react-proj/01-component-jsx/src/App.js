import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FuncComponent from './components/FuncComponent';
// import PracticeAnimal from './components/PracticeAnimal';
// import PracticeNumber from './components/PracticeNumber';
// import PracticeHelloCss from './components/PracticeCss';
// import FuncPropsEx from './components/FuncPropsEx';
// import Section from './components/Section';
// import ClassPropsEx from './components/ClassProsEx';
// import FoodIntroduction from './components/PracticeProps';
// import PracticeBook from './components/PracticeBook';
// import PracticeClass from './components/PracticeClass';
import ProductCard from './components/My29cm';

function App() {
  return (
    <div>
      {/* <FuncComponent /> */}
      {/* <ClassComponent /> */}
      {/* <PracticeAnimal /> */}
      {/* <PracticeNumber /> */}
      {/* <PracticeHelloCss /> */}
      {/* <FuncPropsEx title="SeSAC" content="hello world" number={9} /> */}
      {/* <FuncPropsEx title="SeSAC" number="color" /> */}

      {/* <ClassPropsEx title="SeSAC CLASS" content="lololo" number={5} /> */}

      {/* <Section title="hello">
        <div>hello영역의 content</div>
        <div>hello영역의 content2</div>
      </Section> */}
      {/* <Section title="Bye">
        <h5>Bye영역의 content</h5>
      </Section> */}

      {/* <FoodIntroduction food="마라탕" /> */}
      {/* <PracticeBook
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      /> */}
      {/* <PracticeClass
        valid={() => {
          console.log('콘솔 띄우기 성공!');
        }}
      /> */}
      <ProductCard
        brandName="유라고"
        productName="[7차 리오더] Jacquard hoodie cardigan_2colors"
        productPoster="/kuromi.jpg"
        index={0}
        Ranking=""
        originalPrice={115000}
        discountRate={10}
        currentPrice={103500}
        productLike={33931}
        productComment={88}
      />
    </div>
  );
}

export default App;
