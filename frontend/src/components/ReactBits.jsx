import { Box, Chip, Stack, Typography } from "@mui/material";

export function MetricBit({ value, label }) {
  return (
    <Box className="metric-bit">
      <Typography variant="h5" color="primary.main" fontWeight={700}>
        {value}
      </Typography>
      <Typography color="text.secondary">{label}</Typography>
    </Box>
  );
}

export function SectionBit({ eyebrow, title, subtitle }) {
  return (
    <Box mb={2.5}>
      {eyebrow ? <Chip label={eyebrow} color="primary" variant="outlined" /> : null}
      <Typography variant="h3" mt={1.4}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography color="text.secondary" mt={1}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}

export function FounderMetaBit({ tags }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} size="small" className="founder-tag" />
      ))}
    </Stack>
  );
}
