// 해당 배열을 밖으로 빼놓음
const testArray = [
    { name : "김자바", korean : 92, english : 88, math : 85 },
    { name : "박자바", korean : 88, english : 99, math : 88 },
    { name : "파이썬", korean : 98, english : 72, math : 90 },
];

// 해당 객체
class Printtemp{
    // 생성자
    constructor( testArray, domPrint ){
        this.testArray = testArray;
        this.pointSum = 0;
        this.pointAverage = 0;
        this.domPrint = domPrint;
    }

    // 입력밭은 배열에서 합을 구한 뒤 dom객체를 이용해 출력
    calculatePoint(){
        this.testArray.forEach( ( value, index, array ) => {
            this.pointSum = value[ 'korean' ] + value[ 'english' ] + value[ 'math' ];
            this.pointAverage = this.pointSum / testArray.length;
            document.querySelector( this.domPrint ).innerHTML += `
                <h1>${ value[ 'name' ] }</h1>
                <ul>
                    <li>합계: ${ this.pointSum }</li>
                    <li>평균: ${ this.pointAverage }</li>
                </ul>
            `;
        });
    }

    main(){
        this.calculatePoint();
    }
}

const printTemp = new Printtemp( testArray, '#divPrintArea' );
printTemp.main();