import UserStats from "./asideContent/Userstats";

const AsideContent = ({ className }: { className: string }) => {
  return (
    <aside className={`p-7 ${className}`}>
        <div className="bg-social-bg px-5 py-3 rounded-md">
            <UserStats />
        </div>
    </aside>
  )
}

export default AsideContent;