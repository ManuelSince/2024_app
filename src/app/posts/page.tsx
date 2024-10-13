import { Posts } from "../_components/Posts";
import { Container } from "../_components/wrapper/Container";
export default function Page() {
  return (
    <div className="overflow-hidden">
      <Container>
        <Posts />
      </Container>
    </div>
  );
}
