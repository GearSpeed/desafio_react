export default function Discuss(){

    const itemsDiscuss =[
        {
            comment: 'How I created reusable React Icon Component using react-icons library in an AstroJs Project.',
            answers:'3 comments',
        },
        {
            comment: 'My first Saas - flippcard.com',
            answers:'10 comments',
        },
        {
            comment: '7 Open Source Projects You Should Know - C# Edition ✔️',
            answers:'5 comments',
        },
        {
            comment: '7 Proven Tactics to Grow a Thriving Developer Community Discover',
            answers:'5 comments',
        },
        {
            comment: 'Do you have enough knowledge about object References in JS ? 🤯',
            answers:'3 comments',
        },
        {
            comment: 'Mythbusting DOM: Was DOM Invented Alongside HTML?',
            answers:'13 comments',
        },
        {
            comment: 'Measuring Community Health: The Metrics That Actually Matter for Startup DevTools',
            answers:'3 comments',
        },
    ]


    return (
            itemsDiscuss.map((item) => {
                return(
                    <div className="h-24">
                            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">{item.comment}</p>
                            <p className="pl-2 pt-1 text-sm opacity-80">{item.answers}</p>
                    </div>

                )
            })
    )
}