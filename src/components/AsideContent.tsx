
const AsideContent = ({ className }: { className: string }) => {
  return (
    <aside className={`p-7 opacity-75 ${className}`}>
        <div className="bg-social-bg px-5 py-3 rounded-md">Aside content</div>
    </aside>
  )
}

export default AsideContent;