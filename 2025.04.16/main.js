//nullish 병합 연산자

// const user = { name: null }
// const displayName = user?.name ?? "Geust";

// console.log(displayName);

//비동기 처리

// const getData = async () => {
//     const res = await fetch("https://api.example.com.data");
//     const data = await res.json();
//     console.log(data);
// }
// console.log(getData());

// 구조 분해 할당
// const user = { name: "asd", age: 3 }
// const items = [1, 5, 3]

// const { name, age } = user;
// const [first, second] = items;

// console.log(name, age, first, second);


//spread / rest 문법
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const obj = [
//     [
//         { age: 8 },
//     ],
//     [
//         { age: 16 },
//     ]
// ];

// const newArr = [...arr1, ...arr2];
// const { style, ...rest } = obj;

// const [a1, ...a2] = [1, 2, 3, 4, 5];
// // console.log(newArr, a, rest);
// console.log(style);

//고차함수
// const arr = [1, 2, 3, 4, 5];

// arr.map(x => x * 2);
// arr.filter(x => x > 10);
// console.log(arr.reduce((acc, cur) => acc + cur, 0));

// const set = new Set([1, 2, 2, 3]);
// console.log(set);

// isActicedhk address의 값을 찾아 사용자 추출
// const users = [
//     { name: "Alice", age: 24, isActive: true, address: { city: "Seoul" } },
//     { name: "Bob", age: 30, isActive: false, address: null },
//     { name: "Charlie", age: 28, isActive: true, address: { city: "Busan" } },
//     { name: "Dave", age: 35, isActive: true, address: { city: "Seoul" } },
//     { name: "Eve", age: 22, isActive: false, address: { city: "Incheon" } },
//   ];

// const filtered_user = users
//                         ?.filter((user) => user?.isActive === true)
//                         .filter((user) => user?.address?.city === "Seoul");

// const result = filtered_user.length > 0 ? filtered_user.map((user) => user.name) : "조건에 맞는 유저가 없습니다.";

// console.log(result);


// isActive가 true인것을 찾고 해당 나이를 전부 더해 평균값을 냄.
// const users = [
//     { name: "Tom", age: 26, isActive: true },
//     { name: "Jerry", age: 31, isActive: false },
//     { name: "Spike", age: 40, isActive: true },
//     { name: "Tyke", age: 20, isActive: true },
//   ];

//   오류
// const filtered_user = users?.filter((user) => user.isActive === true);

// const totalAge = filtered_user.reduce((sum, user) => sum + user.age, 0);
// const avg_age = filtered_user.length > 0 ? totalAge / filtered_user.length : 0;

// 정답
// const avg_age = users
//     .filter(user => user.isActive)
//     .reduce((acc, user, _, arr) => acc + user.age / arr.length, 0);

// console.log(avg_age);


//중복제거 + 정렬 (Set 활용)
// const tags = ["js", "html", "css", "js", "react", "html"];
// const sorted_arr = [...new Set(tags)].sort((a, b) => a.localeCompare(b));

// console.log(sorted_arr);


// 안전한 데이터 접근 + fallback (옵셔널 체이닝 + Nullish 병합)
// const product = {
//     name: "Laptop",
//     specs: {
//       cpu: "i7",
//       memory: "16GB"
//     }
// };

// const find_gpu  = product?.specs?.gpu ?? "GPU 정보 없음";
// console.log(find_gpu);


// 구조 분해 할당과 기본값
// const user = {
//     name: "Jin",
//     age: 28,
//     // job은 아예 없음!
//     // job: "student"
// };

// const { name, age, job="무직" } = user;

// console.log(job);

// 조건에 맞는 이름만 추출하기
// const users = [
//     { name: "Anna", active: true },
//     { name: "Ben", active: false },
//     { name: "Cara", active: true }
// ];

// const filtered_users = users?.filter((user) => user.active).map(user => user.name);

// console.log(filtered_users);