export default function LogInOptions(){
    const LogInItems = [
        {
            icon:'/apple.svg',
            span:'Continue with Apple',
        },
        {
            icon:'/facebook.svg',
            span:'Continue with Facebook',
        },
        {
            icon:'https://account.forem.com/assets/smiley-8750f55ac3131b76c24bab0d8a76c0ca4384a76efa121519b8c3164ba34a8e53.png',
            span:'Continue with Forem',
        },
        {
            icon:'/gitHub.svg',
            span:'Continue with GitHub',
        },
        {
            icon:'/google.svg',
            span:'Continue with Google',
        },
        {
            icon:'/twitter.svg',
            span:'Continue with Twitter (X)',
        },
    ]

return(
    LogInItems.map((item) => {
        return(
            <>
                <div key={`key-${item.span}`} className="
                    flex 
                    flex-row
                    border
                    border-gray-300
                    hover:bg-[#F5F5F5]
                    rounded-md
                    w-full
                    h-12
                    max-w-xl
                    justify-center
                    items-center
                    font-semibold
                    text-sm
                    cursor-pointer
                    relative
                ">
                    <img className="
                        p-2
                        size-8 
                        absolute
                        left-2
                    " src={`${item.icon}`} alt="" />
                    <span>{item.span}</span>
                </div>
            
            </>
        )
    })
)

}