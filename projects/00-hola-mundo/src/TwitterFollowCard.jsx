export function TwitterFollowCard() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="avatar de george" 
                    src="https://unavatar.io/george/"/>
                <div className='tw-followCard-data'>
                    <strong>George Russell</strong>
                    <span className='tw-followCard-dataUsername'>@grussel14</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}