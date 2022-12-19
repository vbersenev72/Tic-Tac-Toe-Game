export default function calculateWinner(squares: any) {
    const lines:any = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [1,4,7],
    ]

    for (let i = 0; i < lines.lenght; i++) {
        const [a,b,c] = lines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
        return null
    }
}