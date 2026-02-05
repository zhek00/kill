import InstitutionalPage from "@/components/institutional-page";

export default function AppPrivacidadePage() {
    return (
        <InstitutionalPage title="Política de Privacidade dos Aplicativos">
            <p className="mb-4">
                Esta política se aplica especificamente ao uso de nossos aplicativos móveis (Android e iOS).
            </p>
            <p className="mb-4">
                Nossos aplicativos podem solicitar acesso à sua localização para mostrar ofertas próximas, e acesso à câmera para leitura de QR Codes de validação (para parceiros).
                Nenhum dado é compartilhado com terceiros sem seu consentimento explícito.
            </p>
            <p>
                Para mais detalhes, consulte nossa Política de Privacidade geral.
            </p>
        </InstitutionalPage>
    )
}
