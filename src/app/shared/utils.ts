export function getLeadType(queryType: string): string {
  switch (queryType) {
    case 'W':
      return 'Direct Enquiries';
    case 'B':
      return 'Buy-Leads';
    case 'P':
      return 'PNS Calls';
    case 'V':
    case 'BIZ':
      return 'Catalog-view Leads';
    case 'WA':
      return 'WhatsApp Enquiries';
    case 'M':
      return 'Manual Enquiries';
    default:
      return 'Unknown';
  }
}
