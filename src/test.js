{
  function test() {
    return { name: '홍길동', age: 30 };
  }
}
{
  const test = function () {
    return { name: '홍길동', age: 30 };
  };
}
{
  const test = () => {
    return { name: '홍길동', age: 30 };
  };
}
{
  const test = () => ({ name: '홍길동', age: 30 });
}
