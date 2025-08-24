import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye } from "lucide-react";
import { mockArtifacts, type Artifact } from "@/data/mockData";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Artifacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const { t } = useTranslation();

  // Get unique chapters and types for filters
  const chapters = [...new Set(mockArtifacts.map(artifact => artifact.chapter))];
  const types = [...new Set(mockArtifacts.map(artifact => artifact.type))];

  // Filter artifacts based on search and filters
  const filteredArtifacts = mockArtifacts.filter(artifact => {
    const matchesSearch = artifact.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artifact.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChapter = selectedChapter === "all" || artifact.chapter === selectedChapter;
    const matchesType = selectedType === "all" || artifact.type === selectedType;
    
    return matchesSearch && matchesChapter && matchesType;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedChapter("all");
    setSelectedType("all");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 font-serif">{t('artifacts.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t('artifacts.subtitle')}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('artifacts.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Chapter Filter */}
            <Select value={selectedChapter} onValueChange={setSelectedChapter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={t('artifacts.filterChapter')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('artifacts.allChapters')}</SelectItem>
                {chapters.map(chapter => (
                  <SelectItem key={chapter} value={chapter}>{chapter}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={t('artifacts.filterType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('artifacts.allTypes')}</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            {(searchTerm || selectedChapter !== "all" || selectedType !== "all") && (
              <Button variant="outline" onClick={clearFilters} className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                {t('artifacts.clearFilters')}
              </Button>
            )}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {t('artifacts.resultsCount', { count: filteredArtifacts.length })}
            </p>
            
            {/* Active filters */}
            <div className="flex gap-2">
              {selectedChapter !== "all" && (
                <Badge variant="secondary">
                  {selectedChapter}
                </Badge>
              )}
              {selectedType !== "all" && (
                <Badge variant="secondary">
                  {selectedType}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Artifacts Grid */}
        {filteredArtifacts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('artifacts.noResults.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('artifacts.noResults.description')}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t('artifacts.clearFilters')}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtifacts.map((artifact) => (
              <Card key={artifact.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  {/* Artifact Image */}
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img 
                      src={artifact.imageUrl} 
                      alt={artifact.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {artifact.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {artifact.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{artifact.chapter}</Badge>
                      <Badge variant="secondary">{artifact.type}</Badge>
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to={`/artifacts/${artifact.id}`}>
                        {t('artifacts.viewDetails')}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {mockArtifacts.length}
              </div>
              <p className="text-muted-foreground">{t('artifacts.stats.totalArtifacts')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {chapters.length}
              </div>
              <p className="text-muted-foreground">{t('artifacts.stats.chapters')}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {types.length}
              </div>
              <p className="text-muted-foreground">{t('artifacts.stats.differentTypes')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Artifacts;