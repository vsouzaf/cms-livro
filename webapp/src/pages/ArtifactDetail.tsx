import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Share2, Eye, ExternalLink } from "lucide-react";
import { mockArtifacts } from "@/data/mockData";
import { useTranslation } from 'react-i18next';

const ArtifactDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  if (!id) {
    return <Navigate to="/artifacts" replace />;
  }

  const artifact = mockArtifacts.find(a => a.id === id);
  
  if (!artifact) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Eye className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Artefato não encontrado</h3>
            <p className="text-muted-foreground mb-4">
              O artefato que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/artifacts">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('artifactDetail.backToArtifacts')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Get related artifacts (same chapter or type)
  const relatedArtifacts = mockArtifacts
    .filter(a => a.id !== artifact.id && (a.chapter === artifact.chapter || a.type === artifact.type))
    .slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/artifacts">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('artifactDetail.backToArtifacts')}
            </Link>
          </Button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Section */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    src={artifact.imageUrl} 
                    alt={artifact.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">{artifact.title}</h1>
                <p className="text-lg text-muted-foreground">{artifact.description}</p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-4 font-serif">Descrição Detalhada</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {artifact.content || artifact.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Este artefato faz parte do {artifact.chapter.toLowerCase()} e é classificado como 
                    um {artifact.type.toLowerCase()}. Ele foi cuidadosamente elaborado para 
                    complementar o conteúdo teórico apresentado no livro, oferecendo uma 
                    representação visual clara dos conceitos abordados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Artifact Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">Informações do Artefato</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Capítulo</p>
                    <Badge variant="outline" className="mt-1">{artifact.chapter}</Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                    <Badge variant="secondary" className="mt-1">{artifact.type}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Imagem
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Book CTA */}
            <Card className="bg-hero-gradient text-white">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Gostou deste artefato?</h3>
                  <p className="text-sm text-white/90">
                    Descubra muito mais no livro completo com explicações detalhadas.
                  </p>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Comprar Livro
                </Button>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">Navegação</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <Link to="/artifacts">
                      Ver Todos os Artefatos
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-start">
                    <Link to="/">
                      Página Inicial
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Artifacts */}
        {relatedArtifacts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">{t('artifactDetail.relatedArtifacts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArtifacts.map((relatedArtifact) => (
                <Card key={relatedArtifact.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img 
                        src={relatedArtifact.imageUrl} 
                        alt={relatedArtifact.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedArtifact.title}
                      </h3>
                      
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs">{relatedArtifact.chapter}</Badge>
                        <Badge variant="secondary" className="text-xs">{relatedArtifact.type}</Badge>
                      </div>
                      
                      <Button size="sm" asChild className="w-full">
                        <Link to={`/artifacts/${relatedArtifact.id}`}>
                          {t('artifacts.viewDetails')}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtifactDetail;