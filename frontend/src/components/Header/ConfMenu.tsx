
import { useNavigate } from "@solidjs/router";


export default function ConfMenu() {

  const navigate = useNavigate();

  const handleConfig = () => {
    navigate("/config/");
  }

  return (
    <div class="p-1" onClick={handleConfig}>
      <i class="bi bi-gear icon-btn" title="Config"></i>
    </div>
  )
}
