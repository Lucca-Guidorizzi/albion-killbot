import { faCheck, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AdBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0.5rem;
  text-align: center;
`;

const AdEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  background-color: rgba(
    ${({ theme }) => theme.rgb?.primary ?? "255,189,89"},
    0.12
  );
  border: 1px solid
    rgba(${({ theme }) => theme.rgb?.primary ?? "255,189,89"}, 0.3);

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const AdTitle = styled.h2`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.25;
  color: ${({ theme }) => theme.text};
`;

const AdText = styled.p`
  margin: 0;
  max-width: 26rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.subtleText};
`;

const AdFeatures = styled.ul`
  margin: 0.25rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  svg {
    color: ${({ theme }) => theme.primary};
    margin-right: 0.5rem;
  }
`;

interface IPremiumAdModalProps {
  show: boolean;
  onClose: () => void;
}

const PremiumAdModal = ({ show, onClose }: IPremiumAdModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal centered show={show} onHide={onClose}>
      <Modal.Body>
        <AdBody>
          <AdEyebrow>
            <FontAwesomeIcon icon={faCrown} aria-hidden />
            Albion Killbot Premium
          </AdEyebrow>
          <AdTitle>You are out of tracking slots</AdTitle>
          <AdText>
            You have reached the free tracking limit for this server. Upgrade
            to Premium to unlock:
          </AdText>
          <AdFeatures>
            <li>
              <FontAwesomeIcon icon={faCheck} aria-hidden />
              Higher limits for players, guilds, and alliances
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} aria-hidden />
              Juicy kill alerts and premium features
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} aria-hidden />
              Premium support
            </li>
          </AdFeatures>
        </AdBody>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Not now
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onClose();
            navigate("/premium");
          }}
        >
          <FontAwesomeIcon icon={faCrown} aria-hidden className="me-2" />
          Get Premium
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PremiumAdModal;
