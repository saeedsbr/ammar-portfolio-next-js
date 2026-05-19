import { personal } from '@/app/data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#">
          <div className="footer-brand-copy">
            <span>© {new Date().getFullYear()} {personal.name}</span>
            <span>{personal.title} · {personal.degree}</span>
          </div>
        </a>

        <div className="footer-actions">
          <a className="footer-top" href="#">Back to top ↑</a>
          <span className="footer-ver">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
