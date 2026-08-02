/** Gera o payload "BR Code" (PIX copia e cola) estático. */
function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

const field = (id: string, value: string) =>
  `${id}${String(value.length).padStart(2, "0")}${value}`;

export function buildPixPayload({
  key,
  merchant,
  city,
}: {
  key: string;
  merchant: string;
  city: string;
}): string {
  const gui = field("00", "br.gov.bcb.pix") + field("01", key);
  const payload =
    field("00", "01") +
    field("26", gui) +
    field("52", "0000") +
    field("53", "986") +
    field("58", "BR") +
    field("59", merchant.slice(0, 25)) +
    field("60", city.slice(0, 15)) +
    field("62", field("05", "***")) +
    "6304";
  return payload + crc16(payload);
}
