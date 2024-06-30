export default function SignUpOptions(){
    const signUpItems = [
        {
            icon:'/apple.svg',
            span:'Sign up with Apple',
        },
        {
            icon:'/facebook.svg',
            span:'Sign up with Facebook',
        },
        {
            icon:'https://account.forem.com/assets/smiley-8750f55ac3131b76c24bab0d8a76c0ca4384a76efa121519b8c3164ba34a8e53.png',
            span:'Sign up with Forem',
        },
        {
            icon:'/gitHub.svg',
            span:'Sign up with GitHub',
        },
        {
            icon:'/google.svg',
            span:'Sign up with Google',
        },
        {
            icon:'/twitter.svg',
            span:'Sign up with Twitter (X)',
        },
        {
            icon:'/email.svg',
            span:'Sign up with Email',
        },
    ]

return(
    signUpItems.map((item) => {
        return(
            <>
                <div className="
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