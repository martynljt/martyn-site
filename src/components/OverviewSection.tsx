import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const OverviewSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Overview</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>List here</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>Details here</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>Highlights here</CardContent>
        </Card>
      </div>
    </section>
  );
};

