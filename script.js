const myTag = [
    'HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'REDUX', 'TYPESCRIPT', 'PYTHON', 'C++', 'DJANGO', 'EXPRESSJS', 'MONGODB', 'NODEJS',
    'BOOTSTRAP', 'SCSS', 'JQURY', 'JAVA', 'ANGULAR'
];
var tagCloud = tagCloud('.content', myTag, {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
});