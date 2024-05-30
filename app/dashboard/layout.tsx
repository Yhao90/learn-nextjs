import SideNav from '@/app/ui/dashboard/sidenav';
 
// layout.tsx 文件来创建在多个页面之间共享的 UI,在导航时，只有页面组件 page.tsx 会更新，而布局不会重新渲染
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}